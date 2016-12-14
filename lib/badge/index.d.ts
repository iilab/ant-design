/// <reference types="react" />
import React from 'react';
export interface BadgeProps {
    /** Number to show in badge */
    count: number | string;
    /** Max count to show */
    overflowCount?: number;
    /** whether to show red dot without number */
    dot?: boolean;
    /** whether to show zero */
    showZero?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    text?: string;
}
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        prefixCls: string;
        count: null;
        dot: boolean;
        showZero: boolean;
        overflowCount: number;
    };
    static propTypes: {
        count: React.Requireable<any>;
        dot: React.Requireable<any>;
        showZero: React.Requireable<any>;
        overflowCount: React.Requireable<any>;
    };
    render(): JSX.Element;
}
