export default function PageLayout({children, title, description}) {
    return (
        <section className="page fadeIn">
            <header className="page-header">
                <h2 className="title-page">
                    {title}
                </h2>
            {description}
            </header>
            <section className="content">
                {children}
            </section>
        </section>
    )
}