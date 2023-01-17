export interface PopupProps {
    open: boolean
    setOpen: (open: boolean | ((prevOpen: boolean) => boolean)) => void
}