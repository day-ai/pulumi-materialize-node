import * as pulumi from "@pulumi/pulumi";
export declare class ScimGroupRoles extends pulumi.CustomResource {
    /**
     * Get an existing ScimGroupRoles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScimGroupRolesState, opts?: pulumi.CustomResourceOptions): ScimGroupRoles;
    /**
     * Returns true if the given object is an instance of ScimGroupRoles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScimGroupRoles;
    /**
     * The ID of the SCIM group.
     */
    readonly groupId: pulumi.Output<string>;
    /**
     * The set of role names to assign to the SCIM group.
     */
    readonly roles: pulumi.Output<string[] | undefined>;
    readonly scimGroupRolesId: pulumi.Output<string>;
    /**
     * Create a ScimGroupRoles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScimGroupRolesArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScimGroupRoles resources.
 */
export interface ScimGroupRolesState {
    /**
     * The ID of the SCIM group.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The set of role names to assign to the SCIM group.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    scimGroupRolesId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScimGroupRoles resource.
 */
export interface ScimGroupRolesArgs {
    /**
     * The ID of the SCIM group.
     */
    groupId: pulumi.Input<string>;
    /**
     * The set of role names to assign to the SCIM group.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    scimGroupRolesId?: pulumi.Input<string>;
}
