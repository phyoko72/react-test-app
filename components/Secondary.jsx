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

            <Typography variant="h3" component={"h3"}>
                After changed Production Branch
            </Typography>
        </>
    )
}

export default Secondary
