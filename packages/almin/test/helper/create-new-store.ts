// MIT © 2017 azu
"use strict";
import { Store } from "../../src";

export interface MockStore {
    // mutate state
    mutableStateWithoutEmit(newState: any): void;

    // setState
    updateState(newState: any): void;

    // state
    getState(): any;
}

/**
 * This helper is for creating Store
 */
export function createStore({ name, state }: { name: string; state?: any }) {
    class MockStore extends Store implements MockStore {
        constructor() {
            super();
            this.name = name;
            this.state = state || "value";
        }

        /**
         * Directly modify state
         */
        mutableStateWithoutEmit(newState: any) {
            this.state = newState;
        }

        /**
         * setState
         * @param {*} newState
         */
        updateState(newState: any) {
            this.setState(newState);
        }

        getState() {
            return this.state;
        }
    }

    return new MockStore();
}
