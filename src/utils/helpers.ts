import moment, {Moment} from "moment";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import isNull from "lodash/isNull";
import isUndefined from "lodash/isUndefined";
import isEmpty from "lodash/isEmpty";
import isBoolean from "lodash/isBoolean";
import isNumber from "lodash/isNumber";
import {toastService} from "../services/ToastService";
import {User} from "./../models/entities/User";

declare global {
    interface Navigator {
        msSaveBlob?: (blob: any, defaultName?: string) => boolean;
    }
}

export const getTextContentFromQuill = (content?: string) => {
    if (!content) {
        return null;
    }
    const domParser = new DOMParser();
    const htmlContent = domParser.parseFromString(content, "text/html");
    return htmlContent.body.textContent;
};

const fileExtensionMap: any = {
    image: ["png", "jpg", "jpeg", "gif", "bmp"],
    doc: [
        "pdf",
        "xls",
        "xlsx",
        "xlsm",
        "xltx",
        "xltm",
        "doc",
        "docx",
        "dot",
        "dotm",
        "dot",
        "dotx",
        "docm",
        "docb",
        "wbk",
        "ppt",
        "pptx",
        "pptm",
        "txt",
        "iso",
        "zip",
        "7z",
        "rar",
        "tar",
        "gz",
    ],
    audio: ["mp3", "aac", "wma"],
    video: ["mp4", "webm", "vob", "ogg", "gif", "avi", "mkv", "flv", "mov", "wmv", "m4v", "3gp"],
};

export const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];

export const decodeHtmlCharCodes = (str: string) =>
    str.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode));

export const getUserName = (user?: User) => {
    if (user?.first_name && user?.last_name) {
        return `${user.first_name} ${user.last_name}`;
    }
    if (user?.first_name) {
        return `${user?.first_name}`;
    }
    return "";
};

export const errorFinder = (error: any) => {
    if (error.response && error.response.data) {
        const e = error.response.data;
        return (e?.errors && e.errors[0]?.message) || e?.message || "Error";
    }
    const e = error;
    return (e?.errors && e.errors[0]?.message) || e?.message || "Error";
};

export const enumTextToOptionsText = (str: string = ""): string => {
    if (!str) {
        return "";
    }
    const parts = str.split("_");
    const refactored = parts.map((p) => (p ? p[0].toUpperCase() + p.slice(1, p.length) : p));
    let output = "";
    refactored.forEach((o) => {
        output += `${o} `;
    });
    return output;
};

export const toTitleCase = (str: string): string => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

export const toCapitalCase = (str: string): string =>
    str
        ?.split(" ")
        ?.map((subString) => subString.slice(0, 1).toUpperCase() + subString.slice(1).toLowerCase())
        .join(" ");

export const formatTime = (timeString: string = "") => {
    if (timeString) {
        return moment(timeString, "HH:mm").format("HH:mm");
    }
    return "";
};

export const truncateNumber = (num: number): string => {
    if (!num || Number.isNaN(num)) {
        return "0.00";
    }
    if (num < 1000) {
        return num.toFixed(2);
    }
    if (num < 10000) {
        return num.toFixed(1);
    }
    if (num < 100000) {
        return `${(num / 1000).toFixed(2)}K`;
    }
    if (num < 1000000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    if (num < 100000000) {
        return `${(num / 1000000).toFixed(2)}M`;
    }
    return `${(num / 1000000).toFixed(1)}M`;
};

export const parseFilterValues = (value: any): any => {
    const formats = [moment.ISO_8601, "MM/DD/YYYY  :)  HH*mm*ss"];

    if (moment(value, formats, true).isValid()) {
        return moment(value).format("yyyy-MM-DD");
    }

    if (isArray(value)) {
        return value.map((v: any) => parseFilterValues(v)).toString();
    }
    if (isObject(value)) {
        return (value as any).value;
    }
    if (isBoolean(value)) {
        return String(value);
    }

    return value;
};

export const openSaveFileDialog = (data: any, filename: string, mimetype: string) => {
    if (!data) return;
    const blob = data.constructor !== Blob ? new Blob([...data], {type: mimetype || "application/octet-stream"}) : data;

    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
        return;
    }

    const lnk = document.createElement("a");
    const url = window.URL;
    const objectURL = url.createObjectURL(blob);

    if (mimetype) {
        lnk.type = mimetype;
    }

    lnk.download = filename || "untitled";
    lnk.href = objectURL;
    lnk.dispatchEvent(new MouseEvent("click"));
    setTimeout(url.revokeObjectURL.bind(url, objectURL));
};

export const getSearchParams = (searchParams: URLSearchParams) => {
    const parsedSearchParams: {[key: string]: string} = {};
    const keys = [...searchParams.keys()];
    keys.forEach((key) => {
        if (searchParams.get(key)) {
            parsedSearchParams[key] = searchParams.get(key) as string;
        }
    });
    return parsedSearchParams;
};

function isIterable(value: any) {
    return !(isUndefined(value) || isNull(value) || isNumber(value) || isBoolean(value));
}

export const omitFalsyValues = (obj: any) => {
    Object.entries(obj).forEach(([key, value]) => {
        if (isUndefined(value) || isNull(value) || (isIterable(value) && isEmpty(value))) {
            delete obj[key];
        }
    });
    return obj;
};

export const getDatesInRange = (start: any, end: any, format: string) => {
    if (start === end) {
        return [start];
    }
    const momentStartDate = moment(start);
    const momentEndDate = moment(end);
    const diff = momentEndDate.diff(momentStartDate, "days") - 1;

    return [
        momentStartDate,
        ...Array(diff)
            .fill(1)
            .map((_, index) => momentStartDate.clone().add(index + 1, "days")),
        momentEndDate,
    ].map((date: Moment) => date.format(format));
};

export const parseMultiSelectResponse = (value: any): any => {
    if (isArray(value)) {
        return value.map((v: any) => parseFilterValues(v));
    }
    if (isObject(value)) {
        return (value as any).value;
    }
    return value;
};

export const underDevelopment = () => {
    toastService.showInfo("Feature is under development");
};

const getExtensionType = (name: string) => {
    if (name.startsWith("image/")) {
        return name.split("/")[1];
    }
    let ext: any = name.split(".");
    ext = ext[ext.length - 1];
    return ext;
};

export const getFileType = (fileName?: string) => {
    const fileExt = getExtensionType(fileName!);
    let fileType = "file";
    Object.keys(fileExtensionMap).forEach((type) => {
        if (fileExtensionMap[type].filter((ext: any) => ext === fileExt.toLowerCase()).length) fileType = type;
    });
    return fileType;
};

export const copyTextToClipBoard = (text: string, customMessage?: string) => {
    const message = customMessage || "Text Copied Successfully!!";
    navigator.clipboard.writeText(text);
    toastService.showSuccess(message);
};

export const getValueFromObject = (obj: any, key: string): any =>
    key.split(".").reduce((tempObject, currentKey) => tempObject?.[currentKey], obj);

export const bindTrailingArgs =
    (func: Function, ...trailingArgs: any[]) =>
    (...args: any[]) =>
        func(...args, ...trailingArgs);

export const getOptionsFromEnum = (obj: {[key: string]: string}): any[] =>
    Object.entries(obj).map(([key, value]) => ({
        label: enumTextToOptionsText(value),
        value,
    }));

export const getMessageTime = (date: string): string => {
    const currentDate: any = moment(new Date());
    const messageDate: any = moment(date);
    const diffHours = Math.floor(Math.abs(currentDate - messageDate) / (1000 * 60 * 60));
    let time;
    if (diffHours < 24) {
        time = moment(date).format("HH:mm");
    } else if (diffHours < 72) {
        time = `${diffHours} hours ago`;
    } else {
        time = moment(date).format("DD MMM YYYY");
    }
    return time;
};
