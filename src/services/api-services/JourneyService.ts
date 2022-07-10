import {JourneyStatus} from "./../../models/enums/JourneyStatus";
import {Journey} from "./../../models/entities/Journey";
import {baseApiService} from "./BaseApiService";

class JourneyService {
    static getInstance(): JourneyService {
        return new JourneyService();
    }

    async create(data: any): Promise<{journey: Journey}> {
        return baseApiService.post("/journeys", data);
    }

    async fetchAll(status: JourneyStatus): Promise<{journeys: Journey[]}> {
        return baseApiService.get("/journeys", {
            params: {
                status,
            },
        });
    }

    async fetchDriverAll(status: JourneyStatus): Promise<{journeys: Journey[]}> {
        return baseApiService.get(`/journeys/driver`, {
            params: {
                status,
            },
        });
    }
}

export const journeyService = JourneyService.getInstance();
