import * as pulumi from "@pulumi/pulumi";
export declare class SsoGroupMapping extends pulumi.CustomResource {
    /**
     * Get an existing SsoGroupMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoGroupMappingState, opts?: pulumi.CustomResourceOptions): SsoGroupMapping;
    /**
     * Returns true if the given object is an instance of SsoGroupMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SsoGroupMapping;
    /**
     * Whether the group mapping is enabled.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The name of the SSO group.
     */
    readonly group: pulumi.Output<string>;
    /**
     * List of role names associated with the group.
     */
    readonly roles: pulumi.Output<string[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    readonly ssoConfigId: pulumi.Output<string>;
    readonly ssoGroupMappingId: pulumi.Output<string>;
    /**
     * Create a SsoGroupMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoGroupMappingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SsoGroupMapping resources.
 */
export interface SsoGroupMappingState {
    /**
     * Whether the group mapping is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the SSO group.
     */
    group?: pulumi.Input<string>;
    /**
     * List of role names associated with the group.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId?: pulumi.Input<string>;
    ssoGroupMappingId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SsoGroupMapping resource.
 */
export interface SsoGroupMappingArgs {
    /**
     * The name of the SSO group.
     */
    group: pulumi.Input<string>;
    /**
     * List of role names associated with the group.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId: pulumi.Input<string>;
    ssoGroupMappingId?: pulumi.Input<string>;
}
