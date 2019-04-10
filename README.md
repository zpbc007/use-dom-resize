# use dom resize

React hooks for listening dom element resize event

## Install

```bash
yarn add @hinata_hyuga/use-dom-resize
```

## Usage

```tsx
import useDomResize from '@hinata_hyuga/use-dom-resize'

function MyComponent() {
    const ref = useRef(null)
    const { width, height } = useDomResize(ref)

    useEffect(() => {
        console.log('div size change')
    }, [width, height])

    return (
        <div 
            style={{
                width: '100%', 
                height: '100%'
            }}
            ref={ref}
        >
            test
        </div>
    )
}
```