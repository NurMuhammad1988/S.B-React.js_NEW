import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";

// 09:50da qoldi

const SearchBar = () => {
    return (
        <Paper
            //   bu peper material uini componenti ichidagi component. atributiga esa ichiga html taglar yozsa bo'ladi bu holatdagi form tozza html tagi hissoblanadi
            component={"form"}
            sx={{
                border: `1px solid ${colors.secondary}`,
                pl: 2,
                boxShadow: "none",
            }}
        >
            <input type="text" placeholder="Search..." className="search-bar" />

            <IconButton>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
