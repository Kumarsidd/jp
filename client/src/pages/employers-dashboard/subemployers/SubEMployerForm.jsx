import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { departments } from "@/data/department";
const SubEMployerForm = ({ control, register, errors, isEdit = false }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...register("name", { required: "Name is required" })}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          {...register("phone", { required: "Phone is required" })}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Select
          {...register("department", { required: "department is required" })}
          isInvalid={!!errors.department}
        >
          <option value={""}>Select Department</option>
          {departments.map((item) => (
            <option value={item.label}>{item.label}</option>
          ))}
        </Form.Select>

        <Form.Control.Feedback type="invalid">
          {errors.department?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        {isEdit ? (
          <Form.Control
            {...register("password", { required: "Password is required" })}
            isInvalid={!!errors.password}
          />
        ) : (
          <Form.Control
            {...register("password")}
            isInvalid={!!errors.password}
          />
        )}

        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* <Form.Group className="mb-3">
                        <Form.Label>Dashboard Permissions</Form.Label>
                        {SubemployerdashboardResources.map((resource) => (
                            <div key={resource.resource} className="mb-3">
                                <div className="mb-2">
                                    <strong>{resource.label}</strong>
                                    <p className="text-muted small mb-2">{resource.description}</p>
                                </div>
                                <Controller
                                    name={`dashboardPermissions.${resource.resource}`}
                                    control={control}
                                    render={({ field }) => (
                                        <div className="d-flex gap-3">
                                            {Object.values(AccessLevel).map((permission) => (
                                                <Form.Check
                                                    key={`${resource.resource}-${permission}`}
                                                    type="checkbox"
                                                    id={`${resource.resource}-${permission}`}
                                                    label={permission.charAt(0).toUpperCase() + permission.slice(1)}
                                                    checked={field.value?.[permission] || false}
                                                    onChange={(e) => {
                                                        field.onChange({
                                                            ...field.value,
                                                            [permission]: e.target.checked
                                                        });
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                />
                            </div>
                        ))}
                    </Form.Group> */}
    </>
  );
};

export default SubEMployerForm;
