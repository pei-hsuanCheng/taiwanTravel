import axios from "axios";
import { getAuthorizationHeader } from './util';

export const getEvents = () => axios.get(
  'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=4&$format=JSON', 
  { headers: getAuthorizationHeader() }
);