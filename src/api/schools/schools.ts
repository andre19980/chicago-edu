import api from "@/api/client";
import camelcaseKeys from "camelcase-keys";
import {
  type ApiSchoolsParams,
} from "./schools.types";

const schoolParamsDefault: ApiSchoolsParams = {
  fields: ["school_id", "short_name"],
  pageNumber: 1,
  pageSize: 10,
}

export const querySchools = async (params: ApiSchoolsParams = schoolParamsDefault) => {
  const { fields, pageNumber, pageSize } = {
    ...schoolParamsDefault,
    ...params,
  }

  const response = await api({
    method: "post",
    url: "",
    data: {
      query: `SELECT ${fields.join(", ")}`,
      page: {
        pageNumber,
        pageSize,
      },
      "includeSynthetic": false,
    },
    transformResponse: (data) => {
      return camelcaseKeys(JSON.parse(data))|| [];
    }
  });

  return response.data;
}
