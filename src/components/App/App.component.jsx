import React, { useContext } from 'react';
import Home from '../Home';
import Navigation from '../Navigation';
import { Container, Grid } from '@material-ui/core';
import FightHome from '../FightHome';
import StyledApp from './App.wrapper';
import { ThemeCtx } from '../../contexts/Theme.context';
function AppComponent() {
  const { isDark } = useContext(ThemeCtx);
  return (
    <StyledApp isDark={isDark}>
      <Navigation />
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Container>
            <Home />
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Container>
            <FightHome />
          </Container>
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default AppComponent;
