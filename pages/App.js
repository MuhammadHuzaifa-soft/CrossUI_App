/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { IconButton } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { Link as RouteLink } from "../web_modules/react-hook-module/plugin_router.js";
import { FormControl } from "../web_modules/material-ui/index.js";
import { Select } from "../web_modules/material-ui/index.js";
import { NativeSelect } from "../web_modules/material-ui/index.js";
import { InputLabel } from "../web_modules/material-ui/index.js";
import { MenuItem } from "../web_modules/material-ui/index.js";
import { FormHelperText } from "../web_modules/material-ui/index.js";
import { Input } from "../web_modules/material-ui/index.js";
import { ListItemText } from "../web_modules/material-ui/index.js";
import { Checkbox } from "../web_modules/material-ui/index.js";
import { Chip } from "../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1)
    }
}));

const Module = props => {
    const styles_basic = useStyles4basic(props || {});
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${IconButton} usemodule_lock className=${ styles_basic.item } key="h74b3oxj">
                <${Icon} usemodule_lock usemodule_lock_inner>
                    menu
                </${Icon}>
            </${IconButton}>
            <${FormControl} style=${{"width":"20ch"}} variant="outlined" className=${styles_basic.item} key="4kartdrr">
                <${InputLabel} id="sel_2jr4u0n8_label">
                    Age
                </${InputLabel}>
                <${Select} labelId="sel_2jr4u0n8_label" value=${ defaultState.sel_2jr4u0n8 || '' } onChange=${ e => setDefaultState(Object.assign({}, defaultState, {'sel_2jr4u0n8': e.target.value})) } renderValue=${ value => 'Age - ' + (value||'') } id="sel_2jr4u0n8">
                    <${MenuItem} value=${ 10 }>
                        Ten
                    </${MenuItem}>
                    <${MenuItem} value=${ 20 }>
                        Twenty
                    </${MenuItem}>
                    <${MenuItem} value=${ 30 }>
                        Thirty
                    </${MenuItem}>
                </${Select}>
                <${FormHelperText}>
                    FormHelperText
                </${FormHelperText}>
            </${FormControl}>
            <${RouteLink} to="/" key="95c4yifu">
                Link
                Link
            </${RouteLink}>
        </${React.Fragment}>
    `;
};

export default Module;