import {Button, Typography} from "@mui/material"

const Secondary = () => {
    return (
        <>
            <Typography variant="h2" component={"h2"} color="white">
                This is Secondary Branch
            </Typography>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </>
    )
}

export default Secondary
