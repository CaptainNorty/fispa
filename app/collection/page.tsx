import { ArticleCard } from "../ui/collection/article-card"
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <p>These are the articles in this collection:</p>
            <Link
                href="/article"
                style={{marginBottom: "12px;"}}>
                <ArticleCard />
            </Link>
            <Link
                href="/article"
                style={{marginBottom: "12px;"}}>
                <ArticleCard />
            </Link>
            <Link
                href="/article"
                style={{marginBottom: "12px;"}}>
                <ArticleCard />
            </Link>
            <Link
                href="/article"
                style={{marginBottom: "12px;"}}>
                <ArticleCard />
            </Link>
        </div>
    );
}