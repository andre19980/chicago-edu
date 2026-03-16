export interface ApiSchoolsParams {
  fields: string[];
  pageNumber: number;
  pageSize: number;
}

export interface SchoolData {
  schoolId: string
  shortName: string
  longName: string
  schoolType: string
  primaryCategory: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  fax: string
  cpsSchoolProfile: {
    url: string
  }
  website: {
    url: string
  }
  progressReportYear: number
  blueRibbonAwardYear: string
  excelerateAwardGoldYear: string
  spotLightAwardYear: string
  improvementAwardYear: string
  excellenceAwardYear: string
  studentGrowthRating: string
  studentGrowthDescription: string
  growthReadingGradesTested: string
  growthReadingGradesTested1: string
  growthMathGradesTested: string
  growthMathGradesTested1: string
  studentAttainmentRating: string
  studentAttainmentDescription: string
  attainmentReadingPctEs: string
  attainmentReadingLblEs: string
  attainmentMathPctEs: string
  attainmentMathLblEs: string
  cultureClimateRating: string
  cultureClimateDescription: string
  schoolSurveyStudentResponse: string
  schoolSurveyStudentResponse1: string
  schoolSurveyTeacherResponse: string
  schoolSurveyTeacherResponse1: string
  schoolSurveyParentResponse: string
  schoolSurveyParentResponse1: string
  healthySchoolCertification: string
  healthySchoolCertification1: string
  creativeSchoolCertification: string
  creativeSchoolCertification1: string
  nweaReadingGrowthGrade: string
  nweaReadingGrowthGrade1: string
  nweaReadingGrowthGrade2: string
  nweaReadingGrowthGrade3: string
  nweaReadingGrowthGrade4: string
  nweaReadingGrowthGrade5: string
  nweaReadingGrowthGrade6: string
  nweaReadingGrowthGrade7: string
  nweaReadingGrowthGrade8: string
  nweaReadingGrowthGrade9: string
  nweaReadingGrowthGrade10: string
  nweaReadingGrowthGrade11: string
  nweaMathGrowthGrade3: string
  nweaMathGrowthGrade31: string
  nweaMathGrowthGrade4: string
  nweaMathGrowthGrade41: string
  nweaMathGrowthGrade5: string
  nweaMathGrowthGrade51: string
  nweaMathGrowthGrade6: string
  nweaMathGrowthGrade61: string
  nweaMathGrowthGrade7: string
  nweaMathGrowthGrade71: string
  nweaMathGrowthGrade8: string
  nweaMathGrowthGrade81: string
  nweaReadingAttainmentGrade: string
  nweaReadingAttainmentGrade1: string
  nweaReadingAttainmentGrade2: string
  nweaReadingAttainmentGrade3: string
  nweaReadingAttainmentGrade4: string
  nweaReadingAttainmentGrade5: string
  nweaReadingAttainmentGrade6: string
  nweaReadingAttainmentGrade7: string
  nweaReadingAttainmentGrade8: string
  nweaReadingAttainmentGrade9: string
  nweaReadingAttainmentGrade10: string
  nweaReadingAttainmentGrade11: string
  nweaReadingAttainmentGrade12: string
  nweaReadingAttainmentGrade13: string
  nweaMathAttainmentGrade: string
  nweaMathAttainmentGrade1: string
  nweaMathAttainmentGrade2: string
  nweaMathAttainmentGrade3: string
  nweaMathAttainmentGrade4: string
  nweaMathAttainmentGrade5: string
  nweaMathAttainmentGrade6: string
  nweaMathAttainmentGrade7: string
  nweaMathAttainmentGrade8: string
  nweaMathAttainmentGrade9: string
  nweaMathAttainmentGrade10: string
  nweaMathAttainmentGrade11: string
  nweaMathAttainmentGrade12: string
  nweaMathAttainmentGrade13: string
  schoolSurveyInvolved: string
  schoolSurveySupportive: string
  schoolSurveyAmbitious: string
  schoolSurveyEffective: string
  schoolSurveyCollaborative: string
  schoolSurveySafety: string
  suspensionsPer100Students: string
  suspensionsPer100Students1: string
  suspensionsPer100Students2: string
  misconductsToSuspensions: string
  misconductsToSuspensions1: string
  misconductsToSuspensions2: string
  averageLengthSuspension: string
  averageLengthSuspension1: string
  averageLengthSuspension2: string
  behaviorDisciplineYear: number
  behaviorDisciplineYear1: number
  schoolSurveySchoolCommunity: string
  schoolSurveyParentTeacher: string
  schoolSurveyQualityOf: string
  studentAttendanceYear1: string
  studentAttendanceYear2: string
  studentAttendanceAvgPct: string
  teacherAttendanceYear1: string
  teacherAttendanceYear2: string
  teacherAttendanceAvgPct: number
  oneYearDropoutRateYear: string
  oneYearDropoutRateYear1: string
  oneYearDropoutRateAvg: number
  otherMetricsYear1: number
  otherMetricsYear2: number
  freshmenOnTrackSchool: number
  freshmenOnTrackCpsPct: number
  freshmenOnTrackSchool1: number
  freshmenOnTrackCpsPct1: number
  graduation4YearSchool: string
  graduation4YearCpsPct: number
  graduation4YearSchool1: string
  graduation4YearCpsPct1: number
  graduation5YearSchool: number
  graduation5YearCpsPct: number
  graduation5YearSchool1: number
  graduation5YearCpsPct1: number
  collegeEnrollmentSchool: number
  collegeEnrollmentCpsPct: number
  collegeEnrollmentSchool1: number
  collegeEnrollmentCpsPct1: number
  collegePersistenceSchool: number
  collegePersistenceCpsPct: number
  collegePersistenceSchool1: number
  collegePersistenceCpsPct1: number
  progressTowardGraduation: number
  progressTowardGraduation1: number
  stateSchoolReportCard: string
  mobilityRatePct: string
  chronicTruancyPct: string
  emptyProgressReportMessage: string
  schoolSurveyRating: string
  supportiveSchoolAward: string
  supportiveSchoolAwardDesc: string
  parentSurveyResultsYear: number
  schoolLatitude: number
  schoolLongitude: number
  location: { latitude: number; longitude: number }
  psatGrade9ScoreSchool: string
  psatGrade10ScoreSchool: string
  satGrade11ScoreSchool: string
  satGrade11ScoreCpsAvg: number
  growthPsatGrade9School: string
  growthPsatGrade9School1: string
  growthPsatReadingGrade: string
  growthPsatReadingGrade1: string
  growthSatGrade11School: string
  growthSatGrade11School1: string
  attainmentPsatGrade9School: string
  attainmentPsatGrade9School1: string
  attainmentPsatGrade10: string
  attainmentPsatGrade101: string
  attainmentSatGrade11School: string
  attainmentSatGrade11School1: string
  attainmentAllGradesSchool: string
  attainmentAllGradesSchool1: string
  growthPsatMathGrade10: string
  growthPsatMathGrade101: string
  growthSatReadingGrade: string
  growthSatReadingGrade1: string
  growthSatMathGrade11: string
  growthSatMathGrade111: string
}

export type SchoolTable = {
  schoolId: string,
  shortName: string,
  schoolType: string,
  primaryCategory: string,
  phone: string,
  website: {
    url: string
  }
}

export type School = {
  schoolId: string;
  shortName: string;
  longName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  schoolType: string;
  primaryCategory: string;
  cpsSchoolProfile: string;
  website: string;
  blueRibbonAwardYear: number;
  excelerateAwardGoldYear: number;
  spotLightAwardYear: number;
  improvementAwardYear: number;
  excellenceAwardYear: number;
  studentAttainmentRating: string;
  studentAttainmentDescription: string;
  cultureClimateRating: string;
  cultureClimateDescription: string;
  healthySchoolCertification: string;
  healthySchoolCertificationDescription: string;
  creativeSchoolCertification: string;
  creativeSchoolCertificationDescription: string;
  supportiveSchoolAward: string;
  supportiveSchoolAwardDescription: string;
  schoolSurveyInvolvedFamilies: number;
  schoolSurveySupportiveEnvironment: number;
  schoolSurveyAmbitiousInstruction: number;
  schoolSurveyEffectiveLeaders: number;
  schoolSurveyCollaborativeTeachers: number;
  schoolSurveySafety: number;
  suspensionsPer100StudentsYear1Pct: number;
  suspensionsPer100StudentsYear2Pct: number;
  studentAttendanceYear1: number;
  studentAttendanceYear2: number;
  teacherAttendanceYear1: number;
  teacherAttendanceYear2: number;
  graduation4YearSchoolPctYear1: number;
  graduation4YearSchoolPctYear2: number;
  graduation5YearSchoolPctYear1: number;
  graduation5YearSchoolPctYear2: number;
  oneYearDropoutRateYear1Pct: number;
  oneYearDropoutRateYear2Pct: number;
  mobilityRatePct: number;
  chronicTruancyPct: number;
  satGrade11ScoreSchoolAvg: number;
}

export type SchoolAward = {
  name: string;
  year: number;
}

export enum SupportiveSchoolAwardKeys {
  notRated = "NOT RATED",
  emerging = "EMERGING",
  established = "ESTABLISHED",
  exemplary = "EXEMPLARY",
}

export enum CreativeSchoolCertificationKeys {
  incompleteData = "INCOMPLETE DATA",
  developing = "DEVELOPING",
  emerging = "EMERGING",
  strong = "STRONG",
  excelling = "EXCELLING",
};

export enum StudentAttainmentRatingKeys {
  noDataAvailable = "NO DATA AVAILABLE",
  farBelowExpectations = "FAR BELOW EXPECTATIONS",
  belowExpectations = "BELOW EXPECTATIONS",
  metExpectations = "MET EXPECTATIONS",
};

export enum CultureClimateRatingKeys {
  notEnoughData = "Not Enough Data",
  notYetOrganized = "Not Yet Organized",
  partiallyOrganized = "Partially Organized",
  moderatelyOrganized = "Moderately Organized",
  organized = "Organized",
  wellOrganized = "Well Organized",
};

export enum HealthySchoolCertificationKeys {
  notAchieved = "Not Achieved",
  achieved = "Achieved",
}