export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full bg-dark  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000D21)]"></div>
        </div>
    );
}
