import ResponseData from "../../types/ResponseData";
import http from "../http-common";

class HandleRequest {
  getCountryList(): Promise<ResponseData> {
    return http.get("/country");
  }
}

export default new HandleRequest();
