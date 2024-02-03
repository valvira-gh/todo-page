"use client";

import React from 'react';
import './components.css';

export default function Button() {
    return (
        <button
            className="Button"
            onClick={() => alert('Hello, world!')}
        >Click me
        </button>
    )
}