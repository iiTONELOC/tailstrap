import Box from "../Box";
import Button from "../Button";
import { useEffect, useState } from "react";




export default function DropButton({ }) {
    const [initialState, setInitialState] = useState(false);
    const handleClick = () => {
        console.log(`Clicked`);
        return setInitialState(!initialState);
    };
    useEffect(() => {
    }, [])
    return (

        <Box
            variant="col"
            props={{
                id: "drop-button",
            }}
        >
            <Button
                props={{ onClick: handleClick }}
            >
                FUCK YEA
            </Button>
            {initialState &&
                <ul>
                    <li>
                        ITEM
                    </li>
                    <li>
                        ITEM
                    </li>
                    <li>
                        ITEM
                    </li>
                </ul>
            }
        </Box>
    )
};
