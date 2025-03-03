"use client";

import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const Chart = () => {
    const data = [
        { name: 'Present', value: 70 },
        { name: 'Absent', value: 30 }
    ];

    const COLORS = ['#4CAF50', '#F44336']; // Green for present, Red for absent

    return (
        <div>
            <PieChart width={80} height={80}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={35}
                    paddingAngle={2}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                {/* Custom text inside the chart */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={12}
                    fontWeight="bold"
                    fill="currentColor" // This allows Tailwind to apply color
                    className="text-inverse"
                >
                    {`${data[0].value}%`}
                </text>

            </PieChart>
        </div>
    )
}

export default Chart