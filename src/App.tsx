import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme, colors, ThemeProvider } from "@mui/material";

// import { MuiSelect } from "./components/muiSelect";
// import { MuiTextField } from "./components/muiTextField";
// import { MuiButton } from "./components/muiButton";
// import { MuiTypography } from "./components/muiTypography";
// import { MuiRadio } from "./components/MuiRadio";
// import { MuiCheckbox } from "./components/MuiCheckbox";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiRating } from "./components/MuiRating";
// import { MuiAutocomplete } from "./components/MuiAutocomplete";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiCard } from "./components/MuiCard";
// import { MuiAccordian } from "./components/MuiAccordian";
// import { MuiImagelist } from "./components/MuiImagelist";
// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiLink } from "./components/MuiLink";
// import { MuiBreadcrum } from "./components/MuiBreadcrum";
// import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiSpeedDial } from "./components/MuiSpeedDial";
// import { MuiBottomNav } from "./components/MuiBottomNav";
// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiList } from "./components/MuiList";
// import { MuiChip } from "./components/MuiChip";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiTable } from "./components/MuiTable";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiLoadingBtn } from "./components/MuiLoadingBtn";
// import { MuiPicker } from "./components/MuiPicker";
// import { MuiRange } from "./components/MuiRange";
// import { MuiTabs } from "./components/MuiTabs";
// import { MuiTimeline } from "./components/MuiTimeline";
// import { MuiMasonry } from "./components/MuiMasonry";
import { MuiResponsiveness } from "./components/MuiResponsiveness";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* Basic */}
          {/* <MuiTextField /> */}
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiRadio /> */}
          {/* <MuiSelect /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordian /> */}
          {/* <MuiImagelist /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrum /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNav /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingBtn /> */}
          {/* <MuiPicker /> */}

          {/* @mui/Lab Components */}
          {/* <MuiRange /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}

          {/* Other */}
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
