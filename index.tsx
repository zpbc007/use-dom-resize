import React, { useCallback, useLayoutEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

interface ISize {
    width: number
    height: number
}

const getSize: (el: HTMLElement | null) => ISize = (el) => {
    if (!el) {
        return {
            width: 0,
            height: 0,
        }
    }

    return {
        width: el.offsetWidth,
        height: el.offsetHeight,
    }
}

export default function useDomResize<T extends HTMLElement>(ref: React.RefObject<T>) {
    const [domSize, setDomSize] = useState(getSize(ref.current))

    const handleResize = useCallback(() => {
        if (ref.current) {
            setDomSize(getSize(ref.current))
        }
    }, [ref])

    useLayoutEffect(() => {
        if (!ref.current) {
            return
        }

        handleResize()

        let resizeObserver = new ResizeObserver(() => handleResize())
        resizeObserver.observe(ref.current)

        return () => {
            resizeObserver.disconnect()
            resizeObserver = null as any
        }
    }, [ref.current])

    return domSize
}
