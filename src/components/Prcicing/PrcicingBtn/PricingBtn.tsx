import React from 'react';
import {Button, MenuProps, styled} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import crown from "../../../assets/img/crown.svg";
import Menu from '@mui/material/Menu';
import "./pricingbtn.scss"

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(() => ({
}));

interface Props {
    setGetStarted: any,
}

const ButtonPricing: React.FC<Props> = ({ setGetStarted }) => {

    const [anchorEl, setAnchorEl] = React.useState<boolean>(false);
    const open = Boolean(anchorEl);
    const handleClick = () => {
        setAnchorEl(true)
        setGetStarted(true)
    };
    const handleClose = () => {
        setAnchorEl(false)
        setGetStarted(false)
    };

    return (
        <div>
            <Button
                className='button-pricing'
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Pro<img src={crown} className="ButtonPricing-crown" alt="crown"/>
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                open={open}
                onClose={handleClose}
            >
            </StyledMenu>
        </div>
    );
}


export default ButtonPricing;








