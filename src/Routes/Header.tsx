import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const Head = styled(motion.header)`
  min-width: 1024px;
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 3000;
`;

export const NetflixLogo = styled(motion.svg)`
  width: 120px;
  height: 60px;
  path {
    stroke: white;
    stroke-width: 0.5;
  }
`;

export const logoVars = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 0, 0, 1)",
    pathLength: 1,
  },
};

const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  margin-left: 70px;
`;

const AList = styled.div`
  width: 95%;
  display: flex;
  margin-left: 50px;
  align-items: center;
`;

const SLink = styled(Link)`
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BList = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
`;

const Circle = styled(motion.span)`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: red;
  position: absolute;
  top: 55px;
`;

const SearchContainer = styled.form`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
`;

const SearchLogo = styled.svg`
  width: 40px;
  height: 40px;
  path {
    stroke-width: 2;
  }
`;

const bodyVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 3000,
  },
};

interface IForm {
  query: string | undefined;
}

const Header = () => {
  const navigate = useNavigate();
  const HomeMatch = useMatch("/movies");
  const movieMatch = useMatch("/movies/:movieId");
  const TvMatch = useMatch("/tv");
  const UpcomingMatch = useMatch("/Upcoming");
  const { scrollY } = useViewportScroll();
  const scrollAnimation = useAnimation();
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    navigate(`/search/?query=${data.query}`);
    setValue("query", "");
  };
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 30) {
        scrollAnimation.start("scroll");
      } else {
        scrollAnimation.start("top");
      }
    });
  }, [scrollY, scrollAnimation]);
  if (
    HomeMatch === null &&
    UpcomingMatch === null &&
    TvMatch === null &&
    movieMatch === null
  )
    return null;
  return (
    <Head variants={bodyVariants} initial="top" animate={scrollAnimation}>
      <Container>
        <Box>
          <Link to="/">
            <NetflixLogo
              whileHover={{ scale: 1.1 }}
              viewBox="0 0 111 30"
              focusable="false"
            >
              <g id="netflix-logo">
                <motion.path
                  variants={logoVars}
                  initial="start"
                  animate="end"
                  transition={{ repeat: Infinity, duration: 7 }}
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                ></motion.path>
              </g>
            </NetflixLogo>
          </Link>
          <AList>
            <SLink to="/movies">
              HOME
              {HomeMatch || movieMatch ? (
                <Circle layoutId="circle" transition={{ duration: 0.15 }} />
              ) : null}
            </SLink>
            <SLink to="/upcoming">
              Upcoming
              {UpcomingMatch && (
                <Circle layoutId="circle" transition={{ duration: 0.15 }} />
              )}
            </SLink>
            <SLink to="/tv">
              TV Shows
              {TvMatch && (
                <Circle layoutId="circle" transition={{ duration: 0.15 }} />
              )}
            </SLink>
          </AList>
        </Box>
        <BList>
          <SearchContainer onSubmit={handleSubmit(onVaild)}>
            <SearchLogo
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="presentation"
            >
              <path
                d="M11.4 5.9a5.5 5.5 0 110 11 5.5 5.5 0 110-11zM18 18l-2.5-2.5"
                fill="transparent"
                stroke="currentColor"
              ></path>
            </SearchLogo>
            <Input
              style={{ color: "white" }}
              {...register("query", { required: true, minLength: 2 })}
              placeholder="???????????? ??????????????????."
              inputProps={ariaLabel}
            />
          </SearchContainer>
          <a
            href="https://github.com/seon9jun"
            target="_blank"
            rel="noreferrer"
          >
            <AssignmentIndIcon fontSize="large" />
          </a>
        </BList>
      </Container>
    </Head>
  );
};

export default Header;
