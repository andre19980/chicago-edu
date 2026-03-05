import api from "./client";

export interface ApiSchoolsParams {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
}

const schoolParamsDefault: ApiSchoolsParams = {
  pageNumber: 1,
  pageSize: 10,
}

export const getSchools = async (params: ApiSchoolsParams = schoolParamsDefault) => {
  console.log("######### API Request Params ##########");
  console.log(params);
  console.log("######### API Request Params ##########");

  const { data } = await api.post("", { params });

  console.log("######### API Response ##########");
  console.log(data);
  console.log("######### API Response ##########");

  return data;
}
