import * as React from "react";
import * as ReactDOM from "react-dom";
import { DefaultButton, IButtonProps, Label } from "office-ui-fabric-react";
import "./App.scss";

class App extends React.Component<IButtonProps> {

    public render(): JSX.Element {
        let { disabled, checked } = this.props;
        
        return (
            <div className="ms-BasicButtonsTwoUp">
                <div>
                    <Label>Standard</Label>
                    <DefaultButton
                        data-automation-id='test'
                        disabled={disabled}
                        checked={checked}
                        text='Butjon'
                    />
                </div>
                <div>
                    <Label>Primary</Label>
                    <DefaultButton
                        primary={true}
                        data-automation-id='test'
                        disabled={disabled}
                        checked={checked}
                        text='Butjon'
                        onClick={this._alertClicked}
                    />
                </div>
            </div>
        );
    }

    private _alertClicked(): void {
        alert("Clicked!");
    }
}

const ROOT = document.querySelector(".content");

ReactDOM.render(<App />, ROOT);