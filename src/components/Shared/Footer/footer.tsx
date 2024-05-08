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
        <Stack direction="row" justifyContent="center" gap={4}>
          <Image src={facebookIcon} width={40} height={40} alt="Facebook" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
