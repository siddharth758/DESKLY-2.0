import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SignupPage from "./pages/SignUpPage";
import MainPage from "./pages/main-page";
import HomeView from "./views/homeView";
import ManagementView from "./views/managementView";
import TaskListView from "./views/taskListView";
import CalendarView from "./views/calendarView";
import FolderView from "./views/folderView";
import CheckListSection from "./checklist-view/CheckListSection/CheckListSection";
import ManagementSection from "./management-view/management-section/managementSection";
// import HomeSection from "./home-view/home-section/homeSection";
import "./css/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />}>
          <Route index element={<HomeView />} />
          <Route path="home" element={<HomeView />} />
          <Route path="management" element={<ManagementView />}>
            <Route index element={<ManagementSection />} />
          </Route>
          <Route path="taskList" element={<TaskListView />}>
            <Route index element={<CheckListSection />} />
            <Route path="boards" element={<CheckListSection />} />
          </Route>
          <Route path="calender" element={<CalendarView />} />
          <Route path="folder" element={<FolderView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
