import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Project {
    img: string;
    title: string;
    description?: string; // Google Sheet might not have this, but good to have in interface
    link?: string;        // Google Sheet might not have this
    techStack?: string[]; // Google Sheet might not have this
}

export const usePortfolioData = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://docs.google.com/spreadsheets/d/168w2UO0emiLD9TKy00D65mCr5W3B6zz3hhsndK-rMfU/gviz/tq?tqx=out:json"
                );

                // Parse the weird Google Visualization API response
                const newData = response.data.replace("/*O_o*/", "");
                const startIdx = newData.indexOf("{");
                const jsonString = newData.substring(startIdx, newData.length - 2);
                const parsedData = JSON.parse(jsonString);

                const dataArray = parsedData.table.rows.slice(1).map((row: any) => {
                    const img = row.c[0]?.v || '';
                    const title = row.c[1]?.v || '';
                    // Assuming the sheet only has img and title based on legacy code.
                    // We can add defaults for other fields to make it work with our new ProjectCard
                    return {
                        img,
                        title,
                        description: '', // Placeholder
                        link: '#',       // Placeholder
                        techStack: []    // Placeholder
                    };
                });

                setProjects(dataArray);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching portfolio data:", err);
                setError("Failed to load projects");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { projects, loading, error };
};
