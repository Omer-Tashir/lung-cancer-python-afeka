export class TextManager {

    public static readonly en = {
        APP_select_language: 'Change language',
        APP_admin: 'Admin',
        APP_doctor: 'Doctor',
        APP_client: 'Client',
        APP_no: 'No',
        APP_yes: 'Yes',
        APP_single: 'Single',
        APP_married: 'Married',
        APP_divorced: 'Divorced',
        APP_wiower: 'Wiower',
        APP_not_living_in_private_house: 'I\'m not living in a private house',
        APP_yes_in_last_3_years: 'Yes, in the past 3 years',
        APP_more_than_3_years: 'Yes, before more than 3 years',
        APP_once_a_week: 'Once a week',
        APP_2_3_A_WEEK: '2-3 times a week',
        APP_at_least_4_times_a_week: 'At least 4 times a week',
        APP_not_at_all: 'Not at all',
        APP_rarely: 'Rarely',
        APP_often: 'Often',
        APP_regularly: 'Regularly',
        APP_back_btn: 'Back',
        APP_confirm_btn: 'Confirm',
        APP_continue_btn: 'Continue',
        APP_reset_btn: 'Back to menu',
        APP_finish_btn: 'Finish',

        LOGIN_title: 'Lung Cancer Prediction Project',
        LOGIN_email: 'Email',
        LOGIN_email_required: 'Email is required',
        LOGIN_email_invalid: 'Email is invalid',
        LOGIN_password: 'Password',
        LOGIN_password_required: 'Password is required',
        LOGIN_enter_btn: 'Enter',

        AUTH_wrong_credentials: 'Wrong credentials',

        GET_CLIENT_title: 'Register new client',
        GET_CLIENT_id: 'Enter client personal id',
        GET_CLIENT_id_required: 'Client personal id is required',
        GET_CLIENT_client_not_found: 'Client wasn\'t found for the given id',
        GET_CLIENT_details_title: 'Client details',
        GET_CLIENT_details_id: 'ID',
        GET_CLIENT_details_first_name: 'First Name',
        GET_CLIENT_details_last_name: 'Last Name',
        GET_CLIENT_details_sex: 'Gender',
        GET_CLIENT_details_age: 'Age',
        GET_CLIENT_details_address: 'Address',
        GET_CLIENT_details_medical_history: 'Medical History',

        CLIENT_QUESTION_FORM1_title: 'Preliminary questionnaire for the patient',
        CLIENT_QUESTION_FORM1_PHYSICHAL_ACTIVITY_DIFFICULTY: 'Do you have any physichal activity difficulty?',
        CLIENT_QUESTION_FORM1_RICKETY_BONES: 'Do you suffer from rickety bones?',
        CLIENT_QUESTION_FORM1_COUGHING: 'Do you suffer from cough?',
        CLIENT_QUESTION_FORM1_SADNESS: 'Do you suffer from sadness?',
        CLIENT_QUESTION_FORM1_PASSIVE_SMOKING: 'Do you suffer from passive somking?',
        CLIENT_QUESTION_FORM1_not_enough_chances: 'Based on the patient\'s answers, it was found that there was no need for a follow-up questionnaire',

        CLIENT_QUESTION_FORM2_title: 'Following the patient\'s answers it was found that a follow - up questionnaire was needed',
        CLIENT_QUESTION_FORM2_LOST_title: 'Have you experienced any loss in recent years?',
        CLIENT_QUESTION_FORM2_MARITAL_STATUS_title: 'Marital Status',
        CLIENT_QUESTION_FORM2_BASEMENT_title: 'If you live in a private house, is there a basement in the house?',
        CLIENT_QUESTION_FORM2_FAMILY_CANCER_HISTORY_title: 'Is there or has been a family history of cancer?',
        CLIENT_QUESTION_FORM2_SMOKING_title: 'Do you smoke?',
        CLIENT_QUESTION_FORM2_PHYSICHAL_ACTIVITY_title: 'What level of exercise do you perform?',
        CLIENT_QUESTION_FORM2_HAPINESS_title: 'During the day, do you feel moments of happiness?',
        
        CLIENT_QUESTION_FORM_failed: 'An error occurred while calculating the results',
    
        CLIENT_QUESTION_FORM_RESULT_title: 'Recommendations',
        CLIENT_QUESTION_FORM_RESULT_precentege_title: 'Results in percentage',
        CLIENT_QUESTION_FORM_RESULT_precentege_description_1: 'Following the patientֿֿ\'s answers there is a probability of',
        CLIENT_QUESTION_FORM_RESULT_precentege_description_2: 'that the patient has lung cancer',
        CLIENT_QUESTION_FORM_RESULT_system_advise_title: 'System recommendation',
        CLIENT_QUESTION_FORM_RESULT_system_advise_low_description: 'No submission required for further testing',
        CLIENT_QUESTION_FORM_RESULT_system_advise_moderate_description: 'Required to send for routine inspections',
        CLIENT_QUESTION_FORM_RESULT_system_advise_high_description: 'Required to send for in-depth testing',

        CLIENT_QUESTION_FORM_REPORTS_title: 'Reports',
        CLIENT_QUESTION_FORM_REPORTS_confusion_matrix_report: 'Confusion Matrix',
        CLIENT_QUESTION_FORM_REPORTS_classification_report: 'Classification Report',

        CLIENTS_title: 'Client Medical History Log',
        CLIENTS_last_visit_title: 'Medical history',
        CLIENTS_id: 'ID',
        CLIENTS_address: 'Address',
        CLIENTS_age: 'Age',
        CLIENTS_sex: 'Sex',
        CLIENTS_date: 'Date',
        CLIENTS_advise: 'Given advise',
        CLIENTS_results: 'Test results',
        CLIENTS_empty_medical_history: 'No medical history yet',
    };

    public static readonly he = {
        APP_select_language: 'שנה שפה',
        APP_admin: 'מנהל',
        APP_doctor: 'דוקטור',
        APP_client: 'לקוח',
        APP_no: 'לא',
        APP_yes: 'כן',
        APP_single: 'רווק',
        APP_married: 'נשוי',
        APP_divorced: 'גרוש',
        APP_wiower: 'אלמן',
        APP_not_living_in_private_house: 'לא גר בבית פרטי',
        APP_yes_in_last_3_years: 'כן, ב-3 השנים האחרונות',
        APP_more_than_3_years: 'כן, לפני יותר מ-3 שנים',
        APP_once_a_week: 'פעם בשבוע',
        APP_2_3_A_WEEK: '2-3 פעמים בשבוע',
        APP_at_least_4_times_a_week: 'לפחות 4 פעמים בשבוע',
        APP_not_at_all: 'בכלל לא',
        APP_rarely: 'לעיתים רחוקות',
        APP_often: 'לעיתים קרובות',
        APP_regularly: 'באופן קבוע',
        APP_back_btn: 'חזור',
        APP_confirm_btn: 'אישור',
        APP_continue_btn: 'המשך',
        APP_reset_btn: 'חזור לתפריט חיפוש',
        APP_finish_btn: 'סיום',
        
        LOGIN_title: 'פרוייקט לחיזוי סרטן ריאות',
        LOGIN_email: 'אימייל',
        LOGIN_email_required: 'חובה להזין אימייל',
        LOGIN_email_invalid: 'האימייל אינו תקין',
        LOGIN_password: 'סיסמה',
        LOGIN_password_required: 'חובה להזין סיסמה',
        LOGIN_enter_btn: 'הכנס',

        AUTH_wrong_credentials: 'שם המשתמש או הסיסמה שגויים',

        GET_CLIENT_title: 'קליטת פציינט חדש',
        GET_CLIENT_id: 'הכנס מספר תעודת זהות של פציינט',
        GET_CLIENT_id_required: 'חובה להזין תעודת זהות של פציינט',
        GET_CLIENT_client_not_found: 'לא נמצא פציינט עבור תעודת הזהות שהוקלדה',
        GET_CLIENT_details_title: 'פרטי המטופל',
        GET_CLIENT_details_id: 'תעודת זהות',
        GET_CLIENT_details_first_name: 'שם פרטי',
        GET_CLIENT_details_last_name: 'שם משפחה',
        GET_CLIENT_details_sex: 'מגדר',
        GET_CLIENT_details_age: 'גיל',
        GET_CLIENT_details_address: 'כתובת',
        GET_CLIENT_details_medical_history: 'היסטורייה רפואית',

        CLIENT_QUESTION_FORM1_title: 'שאלון מקדים למטופל',
        CLIENT_QUESTION_FORM1_PHYSICHAL_ACTIVITY_DIFFICULTY: 'האם קיים קושי בביצוע פעילות גופנית?',
        CLIENT_QUESTION_FORM1_RICKETY_BONES: 'האם אתה חש כאבים בעצמות?',
        CLIENT_QUESTION_FORM1_COUGHING: 'האם אתה משתעל?',
        CLIENT_QUESTION_FORM1_SADNESS: 'האם אתה סובל מעצבות?',
        CLIENT_QUESTION_FORM1_PASSIVE_SMOKING: 'האם אתה מעשן פסיבי?',
        CLIENT_QUESTION_FORM1_not_enough_chances: 'על פי תשובות המטופל נמצא שאין צורך בשאלון המשך',

        CLIENT_QUESTION_FORM2_title: 'בעקבות תשובות המטופל נמצא שיש צורך בשאלון המשך',
        CLIENT_QUESTION_FORM2_LOST_title: 'האם אתה חווית אובדן כלשהו בשנים האחרונות?',
        CLIENT_QUESTION_FORM2_MARITAL_STATUS_title: 'מצב משפחתי',
        CLIENT_QUESTION_FORM2_BASEMENT_title: 'במידה ואתה מתגורר בבית פרטי, האם ישנו מרתף בבית?',
        CLIENT_QUESTION_FORM2_FAMILY_CANCER_HISTORY_title: 'האם יש או הייתה היסטוריה של סרטן במשפחה?',
        CLIENT_QUESTION_FORM2_SMOKING_title: 'האם אתה מעשן?',
        CLIENT_QUESTION_FORM2_PHYSICHAL_ACTIVITY_title: 'מה רמת הפעילות הגופנית שאתה מבצע?',
        CLIENT_QUESTION_FORM2_HAPINESS_title: 'במהלך היום, האם אתה מרגיש רגעי אושר?',
        
        CLIENT_QUESTION_FORM_failed: 'ארעה שגיאה בעת חישוב התוצאות',

        CLIENT_QUESTION_FORM_RESULT_title: 'המלצות למטופל',
        CLIENT_QUESTION_FORM_RESULT_precentege_title: 'תוצאות באחוזים',
        CLIENT_QUESTION_FORM_RESULT_precentege_description_1: 'בעקבות תשובות המטופל ישנה הסתברות של',
        CLIENT_QUESTION_FORM_RESULT_precentege_description_2: 'שהמטופל לוקה בסרטן ריאה',
        CLIENT_QUESTION_FORM_RESULT_system_advise_title: 'המלצת המערכת',
        CLIENT_QUESTION_FORM_RESULT_system_advise_low_description: 'לא נדרש לשלוח לבדיקות המשך',
        CLIENT_QUESTION_FORM_RESULT_system_advise_moderate_description: 'נדרש לשלוח לבדיקות שגרתיות',
        CLIENT_QUESTION_FORM_RESULT_system_advise_high_description: 'נדרש לשלוח לבדיקות מעמיקות',

        CLIENT_QUESTION_FORM_REPORTS_title: 'דוחות',
        CLIENT_QUESTION_FORM_REPORTS_confusion_matrix_report: 'מטריצת הבלבול',
        CLIENT_QUESTION_FORM_REPORTS_classification_report: 'דוח סיווג',

        CLIENTS_title: 'לוג היסטורייה רפואית',
        CLIENTS_last_visit_title: 'היסטוריית ביקורים',
        CLIENTS_id: 'ת.ז',
        CLIENTS_address: 'כתובת מגורים',
        CLIENTS_age: 'גיל',
        CLIENTS_sex: 'מגדר',
        CLIENTS_date: 'תאריך ביקור',
        CLIENTS_advise: 'המלצה שניתנה',
        CLIENTS_results: 'תוצאות בדיקה',
        CLIENTS_empty_medical_history: 'טרם נמצאו ביקורים',
    };
}