import {JourneyStatus} from "./../enums/JourneyStatus";

export interface Journey {
    _id: string;
    driver: string;
    start_location: string;
    end_location: string;
    user: string;
    status: JourneyStatus;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
