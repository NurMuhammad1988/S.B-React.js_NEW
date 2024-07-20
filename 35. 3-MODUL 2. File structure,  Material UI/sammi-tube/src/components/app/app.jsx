import { Stack, Button, Container } from "@mui/material";////material UI kutubhonasi //har bir material UI componentini alohid aimpor command bilan yozib emas shu {}distruptatssa yo'li bilanham hammasini bitta import command bilanham chaqirsa bo'ladi

const App = () => {
    return (
        <Container>
            {/* container ona div material UI daham bor har hillari bor masalan fixedlariham bor hullas bootstrapdagi contenerga o'sharkan */}
            <Stack spacing={2} direction="row">
                {/* Stack spacing={2} direction="row" bu huddi Stack tagiga inlinwe style berish desaham bo'ladi reactga inline style berishga o'hsharkan spacing elementlar orasi direction esa bir qatorga tizilsin colmn yoki boshqa stylelarham bersa bo'ladi*/}
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </Container>
    );
};

export default App;
