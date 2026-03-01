import {holidaze} from './holidaze';
import {varivo} from './varivo';
import {bidly} from './bidly';
import {momentum} from './momentum';
import {rainydays} from './rainydays';
import {science} from './science';

export const projects = [holidaze, varivo, bidly, momentum, rainydays, science];

export type {Project, ProjectSection, ProjectLink} from './types';
export {getProjectByName} from './utils';
