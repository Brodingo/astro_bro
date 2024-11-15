import { Jsona } from "jsona";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import type { DrupalNode } from "../types";
import type { TJsonApiBody } from "jsona/lib/JsonaTypes";

// Get the Drupal base url
export const baseURL: string = import.meta.env.DRUPAL_BASE_URL;
