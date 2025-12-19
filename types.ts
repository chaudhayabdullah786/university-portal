
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  id: string;
  name: string;
  role: 'student' | 'parent';
  department: string;
}

export enum Page {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  ATTENDANCE_DETAIL = 'ATTENDANCE_DETAIL',
  ACADEMIC_RECORD = 'ACADEMIC_RECORD'
}
