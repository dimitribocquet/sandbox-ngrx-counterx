import { Detail } from './../models/detail';
export interface State {
    count: number;
    title: string;
    details: Detail[];
}