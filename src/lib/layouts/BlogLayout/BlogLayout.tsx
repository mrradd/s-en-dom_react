import "./BlogLayout.css"

export const BlogLayout = () => {
    return (
        <div className={'blog-layout'}>
            <div className={'left-gutter'}></div>
            <div className={'main-content'}>
                <div className={'header-area'}>Header Placeholder</div>
                <div className={'nav-area'}>Nav Placeholder</div>
                <div className={'content-area'}>
                    <div className={'left-content'}>Left Content</div>
                    <div className={'center-content'}>Main Content</div>
                    <div className={'right-content'}>Right Content</div>
                </div>
            </div>

            <div className={'right-gutter'}></div>
        </div>
    );
}