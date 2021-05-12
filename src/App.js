import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ProtectedRoute from "./ProtectedRoute";
import { useStore } from "./Store";
import Signin from "./Components/Account/Signin";
import Signup from "./Components/Account/Signup";
import ForgotPassword from "./Components/Account/ForgotPassword";
import Listings from "./Components/Listing/Listings";
import Error from "./Components/etc/Error";
import Post from "./Components/PostListing/Post";
import ListingDetail from "./Components/Listing/ListingDetail";
import Messages from "./Components/Messages/Messages";
import FAQs from "./Components/FAQs&Guidelines/FAQs";
import Admin from "./Components/Admin/Admin";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196F3",
    },
    default: "#FFFFFF",
  },
});

const App = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/admin/dashboard" component={Admin} />
          <ProtectedRoute
            path="/listings"
            exact
            component={Listings}
            isAuth={isAuthenticated}
          />
          <ProtectedRoute
            path="/listings/post"
            component={Post}
            isAuth={isAuthenticated}
          />
          <ProtectedRoute
            path="/listings/item"
            component={ListingDetail}
            isAuth={isAuthenticated}
          />
          <ProtectedRoute
            path="/messages"
            component={Messages}
            isAuth={isAuthenticated}
          />
          <ProtectedRoute
            path="/faqs"
            component={FAQs}
            isAuth={isAuthenticated}
          />
          <Route path="" component={Error} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
