/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type AppNavStackParamList = {
  Login: undefined;
  HomeDrawer: undefined;
};

export type HomeNavStackParamList = {
  QualityAudit: undefined;
};

export type QANavStackParamList = {
  BatchSelection: undefined;
  NoteNavigation: undefined;
};

export type NotesNavStackParamList = {
  OverallNotes: undefined;
  WeekNotes: undefined;
};

export type NotesTabParamList = {
  WeekNotes: undefined;
  OverallNotes: undefined;
};
