import { useEffect } from 'react'
import _ from 'lodash'

export const useOutsideDetector = (refs: any, handleAction: any) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            let res: any = []
            _.forEach(refs, (each: any, i: number) => {
                res.push(each.current && !each.current.contains(event.target))
                if (i === refs.length - 1 && !_.some(res, (e: any) => e === false)) {
                    handleAction(false)
                }
            })
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [refs, handleAction])
}