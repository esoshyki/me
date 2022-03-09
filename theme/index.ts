enum flexDirections {
    row = "row",
    column = "column"
}

enum positions {
    center = "center",
    flexStare = "flex-start"
}

export const theme = {
    colors: {
        background: "#ff5043"
    },
    flex: (fd: flexDirections = flexDirections.column, 
        jc: positions = positions.center, 
        ai: positions = positions.center) => ({
        display: "flex",
        flexDirection: fd,
        justifyContent: jc,
        alignItems: ai
    })
}