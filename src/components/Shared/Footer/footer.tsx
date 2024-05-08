import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#ffffff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#ffffff">Health Plans</Typography>
          <Typography color="#ffffff">Medicine</Typography>
          <Typography color="#ffffff">Diagnostics</Typography>
          <Typography color="#ffffff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" py={3} gap={2}>
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          py={3}
          gap={2}
        >
          <Typography component="p" color="white">
            &copy; 2024 PH HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            color="white"
            component={Link}
            href="/"
            variant="h4"
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Teams & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
