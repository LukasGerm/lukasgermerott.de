import { MetaFunction, LoaderFunction, Link } from "remix";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Grid, { GridItem } from "~/components/Grid";
import Typography from "~/components/Typography";
import HomeDrawing from "../assets/home_drawing.svg";

export let meta: MetaFunction = () => {
  return {
    title: "Home | Lukas Germerott",
    description: "Welcome to the homepage of lukas",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Container padding={12}>
      <Grid className="h-full overflow-y-hidden">
        <GridItem className="xl:col-span-4 col-span-6">
          <Container className="lg:px-24">
            <Typography variant="h1" className="font-light leading-tight">
              Change the Web <br /> through quality Software
            </Typography>
            <Typography
              variant="h3"
              className="pt-4 leading-relaxed font-light"
            >
              I want to help make the web a better and more useable place for
              all of us with my knowledge and my ideas. Read about my journeys
              and find useful tips below on my blog.
            </Typography>
            <div className="pt-8 flex">
              <Button large link="/aboutme" color="primary">
                About Me
              </Button>
              <Button large link="/blog" className="ml-8">
                To my Blog
              </Button>
            </div>
          </Container>
        </GridItem>
        <GridItem className="xl:col-span-2 col-span-6">
          <div className="h-full flex justify-end items-end flex-1">
            <img src={HomeDrawing} alt="Drawing about users" />
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
}
