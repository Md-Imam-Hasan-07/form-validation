import ResponseData from "../../types/ResponseData";
import http from "../http-common";

class HandleRequest {
  getCountryList(): Promise<ResponseData> {
    return http.get("/all");
  }
  getCountryInfo(countryName: string): Promise<ResponseData> {
    return http.get(`name/${countryName}?fullText=true`);
  }
}

export default new HandleRequest();
