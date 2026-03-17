import type { SchoolTable, School, SchoolData } from '@/types/Schools'
import {
  SchoolTypesLabels,
  SchoolCategoriesLabels,
  SchoolSurveysScores,
} from '@/utils/mappers/schools'
import { formatUSPhoneNumber } from '@/utils/formatters/formatters'

export function schoolsTableParser(schools: SchoolData[]): SchoolTable[] {
  const parsedSchools = schools.map((school) => ({
    schoolId: school.schoolId,
    shortName: school.shortName,
    schoolType: SchoolTypesLabels[school.schoolType] ?? '',
    primaryCategory: SchoolCategoriesLabels[school.primaryCategory] ?? '',
    phone: school.phone,
    website: {
      url: school.website.url,
    },
  }))

  return parsedSchools
}

export function schoolParser(school: SchoolData): School {
  const parsedSchool = {
    schoolId: school.schoolId,
    shortName: school.shortName,
    longName: school.longName,
    address: school.address,
    city: school.city,
    state: school.state,
    zip: school.zip,
    phone: formatUSPhoneNumber(school?.phone),
    schoolType: SchoolTypesLabels[school.schoolType] ?? '',
    primaryCategory: SchoolCategoriesLabels[school.primaryCategory] ?? '',
    cpsSchoolProfile: school.cpsSchoolProfile?.url,
    website: school.website?.url,
    // awards
    excelerateAwardGoldYear: parseInt(school.excelerateAwardGoldYear),
    blueRibbonAwardYear: parseInt(school.blueRibbonAwardYear),
    spotLightAwardYear: parseInt(school.spotLightAwardYear),
    improvementAwardYear: parseInt(school.improvementAwardYear),
    excellenceAwardYear: parseInt(school.excellenceAwardYear),
    // qualitatives
    supportiveSchoolAward: school.supportiveSchoolAward,
    supportiveSchoolAwardDescription: school.supportiveSchoolAwardDesc,
    studentAttainmentRating: school.studentAttainmentRating,
    studentAttainmentDescription: school.studentAttainmentDescription,
    cultureClimateRating: school.cultureClimateRating,
    cultureClimateDescription: school.cultureClimateDescription,
    healthySchoolCertification: school.healthySchoolCertification,
    healthySchoolCertificationDescription: school.healthySchoolCertification1,
    creativeSchoolCertification: school.creativeSchoolCertification,
    creativeSchoolCertificationDescription: school.creativeSchoolCertification1,
    // surveys
    schoolSurveyInvolvedFamilies:
      SchoolSurveysScores[school.schoolSurveyInvolved?.toLowerCase()] ?? 0,
    schoolSurveySupportiveEnvironment:
      SchoolSurveysScores[school.schoolSurveySupportive?.toLowerCase()] ?? 0,
    schoolSurveyAmbitiousInstruction:
      SchoolSurveysScores[school.schoolSurveyAmbitious?.toLowerCase()] ?? 0,
    schoolSurveyEffectiveLeaders:
      SchoolSurveysScores[school.schoolSurveyEffective?.toLowerCase()] ?? 0,
    schoolSurveyCollaborativeTeachers:
      SchoolSurveysScores[school.schoolSurveyCollaborative?.toLowerCase()] ?? 0,
    schoolSurveySafety: SchoolSurveysScores[school.schoolSurveySafety?.toLowerCase()] ?? 0,
    // metrics
    suspensionsPer100StudentsYear1Pct: parseFloat(school.suspensionsPer100Students),
    suspensionsPer100StudentsYear2Pct: parseFloat(school.suspensionsPer100Students1),
    studentAttendanceYear1: parseFloat(school.studentAttendanceYear1),
    studentAttendanceYear2: parseFloat(school.studentAttendanceYear2),
    teacherAttendanceYear1: parseFloat(school.teacherAttendanceYear1),
    teacherAttendanceYear2: parseFloat(school.teacherAttendanceYear2),
    graduation4YearSchoolPctYear1: parseFloat(school.graduation4YearSchool1),
    graduation4YearSchoolPctYear2: parseFloat(school.graduation4YearSchool),
    graduation5YearSchoolPctYear1: parseFloat(school.graduation5YearSchool1),
    graduation5YearSchoolPctYear2: parseFloat(school.graduation5YearSchool),
    oneYearDropoutRateYear1Pct: parseFloat(school.oneYearDropoutRateYear),
    oneYearDropoutRateYear2Pct: parseFloat(school.oneYearDropoutRateYear1),
    mobilityRatePct: parseFloat(school.mobilityRatePct),
    chronicTruancyPct: parseFloat(school.chronicTruancyPct),
    satGrade11ScoreSchoolAvg: parseFloat(school.satGrade11ScoreSchool),
  }

  return parsedSchool
}
