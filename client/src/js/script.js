/* Things like Navigation, splash screen and scroll bar logic would be inside here =====*/
const appName = "Student Attendance Calculator";

const origin = location.origin;

const loadDefaultPage = () => {
  location.href = `${origin}/client/src/html-pages/auth.html`;
};

loadDefaultPage();

export { appName, origin };
