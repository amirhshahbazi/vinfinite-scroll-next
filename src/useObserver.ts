import {ref, Ref} from "vue"

interface Observer {
    observer: Ref<IntersectionObserver | undefined>
    observerChanged(entry: IntersectionObserverEntry): void
    time: Ref<number | undefined>
}

export default function useObserver(): Observer {
    let observer = ref<IntersectionObserver>()
    let time = ref<number>()

    const observerChanged = (entry: IntersectionObserverEntry): void => {
        if (entry && entry.isIntersecting) {
            time.value = entry.time
        }
    }

    return {
        observer,
        observerChanged,
        time
    }
}
