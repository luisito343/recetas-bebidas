import type { StateCreator } from 'zustand';

export type Notification = {
    text: string;
    error: boolean;
    show: boolean;
}

export type NotificationSliceType = {
    notification: Notification;
    showNotification: (text: string, error?: boolean) => void;
    deleteNotification: () => void;
};

export const createNotificationsSlice: StateCreator<NotificationSliceType>  = (set) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (text, error = false) => {
        set({
            notification: {
                text,
                error,
                show: true
            }
        });
    },
    deleteNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        });
    }
})