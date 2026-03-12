import type { SchoolTable } from "@/types/Schools"
import { SchoolTypesLabels, SchoolCategoriesLabels } from "@/utils/mappers/schools"

export function schoolsTableParser(schools: SchoolTable[]): SchoolTable[] {
  const parsedSchools = schools.map(school => ({
    schoolId: school.schoolId,
    shortName: school.shortName,
    schoolType: SchoolTypesLabels[school.schoolType] ?? "",
    primaryCategory: SchoolCategoriesLabels[school.primaryCategory] ?? "",
    phone: school.phone,
    website: {
      url: school.website.url
    }
  }))

  return parsedSchools;
}