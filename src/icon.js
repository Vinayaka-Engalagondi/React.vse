import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Box } from '@mui/material';

function Icon() {
    const navigate = useNavigate();
    const actions = [
        {
            icon: 'home',
            name: 'Print',
            onClick: () => navigate('/dtails'),
        },
        {
            icon: 'Input',
            name: 'color',
            onClick: () => navigate('/inbox'), // Navigate to inbox
        },
        {
            icon: 'About',
            name: 'Save',
            onClick: () => navigate('/about'), // Navigate to inbox
        },
        {
            icon: 'Academics',
            name: 'Save',
            onClick: () => navigate('/academics'), // Navigate to inbox
        },
        
        {
            icon: 'Certificate',
            name: 'Share',
            onClick: () => navigate('/certificate'), // Navigate to inbo
        },
    ];

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    icon={<SpeedDialIcon />}
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: 16,
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.onClick} // Add onClick for navigation
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    );
}

export default Icon;
